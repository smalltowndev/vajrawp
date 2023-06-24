/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		selectedUser
	} = attributes;

	const users = [];

	vajraStarterDemoBlockData.map((user) => {
		users.push({ value: user.username, label: user.name});
	});

	const onChangeUser = ( user ) => {
		let userData = {};
		vajraStarterDemoBlockData.map( ( userKey ) => {
			if ( userKey.username === user ) {
				userData = userKey;
			}
		} );

		setAttributes({ selectedUser: user, user: userData });
	}

	const getSelectedUser = ( selection ) => {
		if ( ! selection ) {
			return "No user is selected";
		}

		let userData = {};
		vajraStarterDemoBlockData.map( ( user ) => {
			if ( user.username === selection ) {
				userData = user;
			}
		} );

		return `Hello my name is ${userData?.name}. I work at ${userData?.company?.name}!`;
	}

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title="Block Selector">
					<SelectControl
							label="Select User"
							value={ selectedUser }
							options={ users }
							onChange={ onChangeUser }
						/>
				</PanelBody>
			</InspectorControls>
			{ getSelectedUser(selectedUser) }
		</div>
	);
}