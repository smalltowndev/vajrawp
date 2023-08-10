/**
 * External dependencies.
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import SettingsLayout from '../../layout/SettingsLayout';
import { SettingsCard, RadioSelectInput, MultiSelectInput, SelectInput, TextInput, ToggleInput } from '../../templates';

const GeneralSettings = () => {

    const [ options, setOptions ] = useState({
        "push-notif": "none",
        "push-select": [
            "same",
            "none"
        ],
        "select-notify": "default",
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
                title="Toggle fields"
                description="We'll always let you know about important changes, but you pick what else you want to hear about."
                onSave={onSave}
            >

                <TextInput
                    id="site-meta-desc"
                    label="Site Meta Description"
                    description="These are delivered via SMS to your mobile phone."
                    value={options["site-meta-desc"]}
                    placeholder="Hello world"
                    setOption={updateOption}
                />
                <ToggleInput
                    id="site-meta-toggle"
                    label="Site Meta Toggle"
                    description="(Extra description)"
                    value={options["site-meta-toggle"]}
                    placeholder="Hello world"
                    setOption={updateOption}
                />

            </SettingsCard>

            <SettingsCard
                title="Select fields"
                description="We'll always let you know about important changes, but you pick what else you want to hear about."
                onSave={onSave}
            >
                <MultiSelectInput
                    id="push-select"
                    label="Push Notifications"
                    description="These are delivered via SMS to your mobile phone."
                    values={options["push-select"]}
                    options={
                        [
                            { key: 'everything', label: "Everything", description: 'This does this and bla bla bla.' },
                            { key: 'same', label: "Same as Email", description: 'This does this and bla bla bla.' },
                            { key: 'none', label: "No Push Notifications", description: 'This does this and bla bla bla.' }
                        ]
                    }
                    setOption={updateOption}
                />
                <RadioSelectInput
                    id="push-notif"
                    label="Push Notifications"
                    description="These are delivered via SMS to your mobile phone."
                    value={options["push-notif"]}
                    options={
                        [
                            { key: 'everything', label: "Everything", description: 'This does this and bla bla bla.' },
                            { key: 'same', label: "Same as Email", description: 'This does this and bla bla bla.' },
                            { key: 'none', label: "No Push Notifications", description: 'This does this and bla bla bla.' }
                        ]
                    }
                    setOption={updateOption}
                />
                <SelectInput
                    id="select-notify"
                    label="Select Notifications"
                    description="These are delivered via SMS to your mobile phone."
                    value={options["select-notify"]}
                    options={
                        {
                            everything: "Everything",
                            same: "Same as the email",
                            none: "No push notifications"
                        }
                    }
                    setOption={updateOption}
                />
            </SettingsCard>
        </SettingsLayout>
    )
}

export default GeneralSettings;