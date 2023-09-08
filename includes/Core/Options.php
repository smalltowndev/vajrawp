<?php
/**
 * Plugin Options class.
 *
 * @package VajraWP
 */

namespace VajraWP\Core;

/**
 * Plugin options registration and management.
 */
class Options {
	/**
	 * Class instance.
	 *
	 * @var $instace
	 */
	protected static $instance;

	/**
	 * Options key.
	 */
	const OPTION_KEY = 'vajrawp_options';

	/**
	 * Get an instance of class.
	 *
	 * @return Options
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Checks whether or not a value is set for the given option.
	 *
	 * @param string $option Option name.
	 * @return bool True if value set, false otherwise.
	 */
	public function has( $option ) {
		$options = get_option( self::OPTION_KEY );

		return isset( $options[ $option ] );
	}

	/**
	 * Get a single option, or all if no key is provided.
	 *
	 * @param string|array|bool $key Option key.
	 * @param mixed             $default Default value.
	 * @return array|string|bool
	 */
	public function get( $key = false, $default = false ) {
		$options = get_option( self::OPTION_KEY );

		if ( ! $options || ! is_array( $options ) ) {
			$options = array();
		}

		if ( false !== $key ) {
			return isset( $options[ $key ] ) ? $options[ $key ] : $default;
		}

		return $options;
	}

	/**
	 * Update a single option.
	 *
	 * @param string $key Option key.
	 * @param mixed  $value Option value.
	 * @return void
	 */
	public function set( $key, $value ) {
		$options         = $this->get();
		$options[ $key ] = $value;
		update_option( self::OPTION_KEY, $options );
	}

	/**
	 * Delete a single option.
	 *
	 * @param string $key Option key.
	 * @return void
	 */
	public function delete( $key ) {
		$options = $this->get();
		if ( ! isset( $options[ $key ] ) ) {
			return;
		}

		unset( $options[ $key ] );
		update_option( self::OPTION_KEY, $options );
	}
}
