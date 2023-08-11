/**
 * External dependencies.
 */
import { useEffect, useState } from '@wordpress/element';

import SettingsLayout from '../../layout/SettingsLayout';
import { SettingsCard, TextInput, ToggleInput } from '../../templates';
import { fetchOptions, saveOptions } from '../../../api/settings';
import { showPromiseToast } from '../../../utils';

const BlockSettings = () => {
    const [processing, setProcessing] = useState(true);

    const [options, setOptions] = useState({
        "block-prefix": "",
        "has-block-prefix": false
    });

    const updateOption = ( value, id ) => {
        setOptions({...options, [id]: value });
    }

    const onSave = () => {
        if ( !processing ) {
            const res = saveOptions( { options } );
            showPromiseToast( res, '', 'Settings updated!' );
        }
    }

    useEffect( () => {
        const updateOptions = ( settings ) => setOptions({ ...options, ...settings });
        const res = fetchOptions( { updateOptions } ).then( res => setProcessing(false) );

        showPromiseToast(res);
    }, []);

    return (
        <SettingsLayout>
                <SettingsCard
                    title="Block options"
                    description="We'll always let you know about important changes, but you pick what else you want to hear about."
                    onSave={onSave}
                >
                    <TextInput
                        id="block-prefix"
                        label="Block Prefix"
                        description="A random text input for demo."
                        value={options["block-prefix"]}
                        placeholder="Hello blocks!"
                        setOption={updateOption}
                    />
                    <ToggleInput
                        id="has-block-prefix"
                        label="Enable Block Prefix"
                        description="(Some description)"
                        value={options["has-block-prefix"]}
                        placeholder="Hello world"
                        setOption={updateOption}
                    />

                </SettingsCard>
        </SettingsLayout>
    )
}

export default BlockSettings;