<?php
/**
 * Primary class file for the VajraWP.
 *
 * @package VajraWP
 */

namespace VajraWP;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use VajraWP\Core\Options;
use VajraWP\API\OptionsAPI;
use VajraWP\Blocks\RegisterBlocks;
use VajraWP\Admin\RegisterAdmin;

/**
 * Class Plugin
 */
class Plugin {
	/**
	 * Options manager.
	 *
	 * @var Options
	 */
	public $options_manager;

	/**
	 * Options API manager.
	 *
	 * @var OptionsAPI
	 */
	public $options_api_manager;

	/**
	 * Blocks manager.
	 *
	 * @var RegisterBlocks
	 */
	public $blocks_manager;

	/**
	 * Admin Manager.
	 *
	 * @var RegisterAdmin;
	 */
	public $admin_manager;

	/**
	 * Constructor.
	 */
	public function __construct() {
		// Get options manager instance.
		$this->options_manager = Options::get_instance();

		// Register APIs.
		$this->options_api_manager = new OptionsAPI();

		// Register Blocks.
		$this->blocks_manager = new RegisterBlocks();

		// Register Admin.
		$this->admin_manager = new RegisterAdmin();

		$this->register_hooks();
	}

	/**
	 * Registers core hooks.
	 */
	public function register_hooks() {
		/**
		 * Add "Dashboard" link to plugins page.
		 */
		add_filter(
			'plugin_action_links_' . VAJRAWP_FOLDER . '/vajrawp.php',
			array( $this, 'action_links' )
		);
	}

	/**
	 * Registers plugin action links.
	 *
	 * @param array $actions A list of actions for the plugin.
	 * @return array
	 */
	public function action_links( $actions ) {
		$settings_link = '<a href="' . esc_url( admin_url( 'admin.php?page=vajrawp' ) ) . '">' . __( 'Dashboard', 'vajrawp' ) . '</a>';
		array_unshift( $actions, $settings_link );

		return $actions;
	}

	/**
	 * Plugin deactivation hook.
	 *
	 * @access public
	 * @static
	 */
	public static function plugin_activation() {
		// Clear the permalinks in case any new post types has been registered.
		flush_rewrite_rules();
	}

	/**
	 * Plugin deactivation hook.
	 *
	 * @access public
	 * @static
	 */
	public static function plugin_deactivation() {
	}
}
