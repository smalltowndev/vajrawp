import { useState } from '@wordpress/element';
import SettingsLayout from '../../layout/SettingsLayout';
import { SettingsCard, RadioSelectInput, MultiSelectInput } from "../../templates";

const GeneralSettings = () => {

    const [ options, setOptions ] = useState({
        "push-notif": "none",
        "push-select": "same"
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
                title="Notifications"
                description="We'll always let you know about important changes, but you pick what else you want to hear about."
                onSave={onSave}
            >
                <MultiSelectInput
                    id="push-select"
                    label="Push Notifications"
                    description="These are delivered via SMS to your mobile phone."
                    defaultOption={options["push-select"]}
                    options={
                        {
                            everything: "Everything",
                            same: "Same as the email",
                            none: "No push notifications"
                        }
                    }
                    setOption={updateOption}
                />
                <RadioSelectInput
                    id="push-notif"
                    label="Push Notifications"
                    description="These are delivered via SMS to your mobile phone."
                    defaultOption={options["push-notif"]}
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