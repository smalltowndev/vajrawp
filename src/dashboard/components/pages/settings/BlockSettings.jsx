import SettingsLayout from '../../layout/SettingsLayout';
import {SettingsCard, TextInput, ToggleInput} from "../../templates";
import {useState} from "@wordpress/element";

const BlockSettings = () => {
    const [ options, setOptions ] = useState({
        "site-meta-desc": "",
        "site-meta-toggle": false
    });

    const updateOption = (value, id) => {
        setOptions({...options, [id]: value });
    }

    const onSave = () => {
        // saves something on the api.
        console.log(options);
    }
    return (
        <SettingsLayout>
                <SettingsCard
                    title="Block options"
                    description="We'll always let you know about important changes, but you pick what else you want to hear about."
                    onSave={onSave}
                >

                    <TextInput
                        id="site-meta-desc"
                        label="Some Input"
                        description="These are delivered via SMS to your mobile phone."
                        value={options["site-meta-desc"]}
                        placeholder="Hello world"
                        setOption={updateOption}
                    />
                    <ToggleInput
                        id="site-meta-toggle"
                        label="Some Toggle"
                        description="(Extra description)"
                        value={options["site-meta-toggle"]}
                        placeholder="Hello world"
                        setOption={updateOption}
                    />

                </SettingsCard>
        </SettingsLayout>
    )
}

export default BlockSettings;