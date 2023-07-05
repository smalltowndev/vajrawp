<?php
/**
 * Admin registration class.
 *
 * @package VajraStarterPlugin
 */

namespace SmallTownDev\VajraStarter\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Automattic\Jetpack\Assets;

/**
 * Class RegisterAdmin
 */
class RegisterAdmin {
	/**
	 * Class constructor.
	 */
	public function __construct() {
		// Register Admin Dashboard.
		add_action( 'admin_menu', array( $this, 'register_admin_dashboard' ) );
	}

	/**
	 * Register admin dashboard.
	 */
	public function register_admin_dashboard() {
		$primary_slug = 'vajra-starter';

		$dashboard_page_suffix = add_menu_page(
			__( 'Vajra Starter Dashboard', 'vajra-starter' ),
			_x( 'Vajra Starter', 'The Vajra Plugin product name, without the Vajra prefix', 'vajra-starter' ),
			'manage_options',
			$primary_slug,
			array( $this, 'plugin_dashboard_page' ),
			'dashicons-superhero',
			30
		);

		// Register dashboard hooks.
		add_action( 'load-' . $dashboard_page_suffix, array( $this, 'dashboard_admin_init' ) );

		// Register dashboard submenu nav item.
		add_submenu_page( $primary_slug, 'Vajra Dashboard', 'Dashboard', 'manage_options', $primary_slug . '#/dashboard', '__return_null' );

		// Remove duplicate menu hack.
		// Note: It needs to go after the above add_submenu_page call.
		remove_submenu_page( $primary_slug, $primary_slug );

		// Register getting started aka onboarding submenu nav item.
		add_submenu_page( $primary_slug, 'Vajra Dashboard', 'Getting Started', 'manage_options', $primary_slug . '#/getting-started', '__return_null' );

		// Register changelog submenu nav item.
		add_submenu_page( $primary_slug, 'Vajra Dashboard', 'Changelog', 'manage_options', $primary_slug . '#/changelog', '__return_null' );

		// Register settings submenu nav item.
		add_submenu_page( $primary_slug, 'Vajra Dashboard', 'Settings', 'manage_options', $primary_slug . '#/settings', '__return_null' );
	}

	/**
	 * Initialize the Dashboard admin resources.
	 */
	public function dashboard_admin_init() {
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_dashboard_admin_scripts' ) );
	}

	/**
	 * Enqueue plugin admin scripts and styles.
	 */
	public function enqueue_dashboard_admin_scripts() {
		Assets::register_script(
			'vajra-starter-dashboard',
			'build/dashboard/index.js',
			VAJRA_STARTER_ROOT_FILE,
			array(
				'in_footer'  => true,
				'textdomain' => 'vajra-starter',
			)
		);

		// Enqueue app script.
		Assets::enqueue_script( 'vajra-starter-dashboard' );
		// Initial JS state.
		wp_add_inline_script( 'vajra-starter-dashboard', $this->render_dashboard_initial_state(), 'before' );
	}

	/**
	 * Render the initial state into a JavaScript variable.
	 *
	 * @return string
	 */
	public function render_dashboard_initial_state() {
		return 'var vajraStarterPluginInitialState=JSON.parse(decodeURIComponent("' . rawurlencode( wp_json_encode( $this->initial_dashboard_state() ) ) . '"));';
	}

	/**
	 * Get the initial state data for hydrating the React UI.
	 *
	 * @return array
	 */
	public function initial_dashboard_state() {
		return array(
			'apiRoot'           => esc_url_raw( rest_url() ),
			'registrationNonce' => wp_create_nonce( 'vajra-registration-nonce' ),
		);
	}

	/**
	 * Plugin Dashboard page.
	 */
	public function plugin_dashboard_page() {
		?>
			<div id="vajra-starter-dashboard-root"></div>
		<?php
	}
}
