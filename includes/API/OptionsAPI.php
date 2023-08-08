<?php
/**
 * Options API registration class.
 *
 * @package VajraStarterPlugin
 */

namespace SmallTownDev\VajraStarter\API;

use SmallTownDev\VajraStarter\Core\Options;
use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class OptionsAPI
 */
class OptionsAPI {
	/**
	 * Routes Namespace.
	 *
	 * @var $namespace
	 */
	private $namespace = 'vajra-starter';

	/**
	 * Available routes.
	 *
	 * @var $endpoints
	 */
	private $routes;

	/**
	 * Class constructor.
	 */
	public function __construct() {
		// Define routes.
		$this->define_routes();

		// Register v1 routes.
		add_action( 'rest_api_init', array( $this, 'register_v1_routes' ) );
	}


	/**
	 * Defines REST Routes.
	 *
	 * @return void
	 */
	public function define_routes() {
		$this->routes = array(
			'get'    => array(
				'method'   => WP_REST_Server::READABLE,
				'callback' => 'get_option',
			),
			'set'    => array(
				'method'   => WP_REST_Server::CREATABLE,
				'callback' => 'set_option',
			),
			'delete' => array(
				'method'   => WP_REST_Server::CREATABLE,
				'callback' => 'delete_option',
			),
		);
	}

	/**
	 * Registers v1 REST routes.
	 *
	 * @return void
	 */
	public function register_v1_routes() {
		foreach ( $this->routes as $route => $details ) {
			register_rest_route(
				"{$this->namespace}/v1",
				"/options/{$route}",
				array(
					'methods'             => $details['method'],
					'callback'            => array( $this, $details['callback'] ),
					'permission_callback' => array( $this, 'rest_permission_check' ),
					'args'                => array(),
				)
			);
		}
	}

	/**
	 * Checks if a request has access to update a setting
	 *
	 * @return WP_Error|bool
	 */
	public function rest_permission_check() {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Get option or options.
	 *
	 * @param WP_REST_Request $request Request object.
	 *
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_option( WP_REST_Request $request ) {
		$key = $request->get_param( 'option_name' );

		$options = Options::get_instance();

		if ( ! empty( $key ) ) {
			if ( $options->has( $key ) ) {
				$result = $options->get( $key );
			} else {
				return new WP_Error( 'option_error', __( 'Invalid or expired option name.', 'vajra-starter' ) );
			}
		} else {
			$result = $options->get();
		}

		return new WP_REST_Response( $result, 200 );
	}

}
