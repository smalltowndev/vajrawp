<?php
/**
 * Vajra Starter Plugin
 *
 * @package           VajraStarterPlugin
 * @author            SmallTownDev Co.
 * @copyright         2023 SmallTownDev Co.
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Vajra Starter Plugin
 * Plugin URI:        https://vajra-starter-wp.smalltowndev.com
 * Description:       A starter WordPress plugin scaffold which comes pre-configured for block development, admin dashboard with settings and standard plugin code.
 * Version:           0.1.0-beta
 * Requires at least: 6.0
 * Requires PHP:      8.0
 * Author:            SmallTownDev Co.
 * Author URI:        https://smalltowndev.com
 * Text Domain:       vajra-starter
 * License:           GPL v2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 *
 */

 /*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'VAJRA_STARTER_VERSION', '0.1.0-beta' );
define( 'VAJRA_STARTER_DIR', plugin_dir_path( __FILE__ ) );
define( 'VAJRA_STARTER_ROOT_FILE', __FILE__ );
define( 'VAJRA_STARTER_ROOT_FILE_RELATIVE_PATH', plugin_basename( __FILE__ ) );
define( 'VAJRA_STARTER_SLUG', 'vajra-starter' );
define( 'VAJRA_STARTER_FOLDER', dirname( plugin_basename( __FILE__ ) ) );
define( 'VAJRA_STARTER_URL', plugins_url( '', __FILE__ ) );

// Vajra Autoloader.
$vajra_autoloader = VAJRA_STARTER_DIR . 'vendor/autoload_packages.php';
if ( is_readable( $vajra_autoloader ) ) {
	require_once $vajra_autoloader;
} else { // Something very unexpected. Error out gently with an admin_notice and exit loading.
	if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
		error_log( // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
			__( 'Error loading autoloader file for Vajra Starter Plugin plugin', 'vajra-starter' )
		);
	}

	add_action(
		'admin_notices',
		function () {
			?>
		<div class="notice notice-error is-dismissible">
			<p>
				<?php
				printf(
					wp_kses(
						/* translators: Placeholder is a link to a support document. */
						__( 'Your installation of Vajra Starter Plugin is incomplete. If you installed Vajra Starter Plugin from GitHub, please refer to <a href="%1$s" target="_blank" rel="noopener noreferrer">this document</a> to set up your development environment. Vajra Starter Plugin must have Composer dependencies installed and built via the build command.', 'vajra-starter' ),
						array(
							'a' => array(
								'href'   => array(),
								'target' => array(),
								'rel'    => array(),
							),
						)
					),
					'https://github.com/SmallTownDev/vajra-starter-plugin'
				);
				?>
			</p>
		</div>
			<?php
		}
	);

	return;
}

// Redirect to plugin onboarding when the plugin is activated.
add_action( 'activated_plugin', 'vajra_starter_activation' );

/**
 * Redirects to plugin onboarding when the plugin is activated
 *
 * @param string $plugin Path to the plugin file relative to the plugins directory.
 */
function vajra_starter_activation( $plugin ) {
	// Clear the permalinks after the post type has been registered.
	flush_rewrite_rules();
	if (
		VAJRA_STARTER_ROOT_FILE_RELATIVE_PATH === $plugin &&
		\Automattic\Jetpack\Plugins_Installer::is_current_request_activating_plugin_from_plugins_screen( VAJRA_STARTER_ROOT_FILE_RELATIVE_PATH )
	) {
		wp_safe_redirect( esc_url( admin_url( 'admin.php?page=vajra-starter#/getting-started' ) ) );
		exit;
	}
}

register_activation_hook( __FILE__, array( '\SmallTownDev\VajraStarter\Plugin', 'plugin_activation' ) );
register_deactivation_hook( __FILE__, array( '\SmallTownDev\VajraStarter\Plugin', 'plugin_deactivation' ) );

// Main plugin class.
if ( class_exists( \SmallTownDev\VajraStarter\Plugin::class ) ) {
	new \SmallTownDev\VajraStarter\Plugin();
}
