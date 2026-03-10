<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', "trabalmx_WP_Trabal");

/** Tu nombre de usuario de MySQL */
define('DB_USER', "trabalmx_UserWPt");

/** Tu contraseña de MySQL */
define('DB_PASSWORD', "\$&63hjQl#P7h5TgWZ");

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', "localhost");

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'cLX|j^,t~3@c:BnMl)95<H.T<>a 9< Y?4L4G};3c^6/9cU#Z5LCrF5~nT@g]|s0');
define('SECURE_AUTH_KEY', 'zShlSE._d&rufvX!)Bhqa,yHrze@AI~ 0e*nr<3$P.+k_4l?1Bqn|o*F-5ViaAuH');
define('LOGGED_IN_KEY', 'gsH=.dhtzd>t4s_Fje2k*_xMD0Dtw$U UG6(WxP?I3}RK!7_X%2AdR=uV?,;/>I|');
define('NONCE_KEY', '~|WX;?d(;obL]?3S^a%o:xjnXn_g&{*taD=7r&XJ7Ez97 M Uq3_,MIKon4$Vq]2');
define('AUTH_SALT', '4h&/!,OJ>K;A1F-;-H^R$1SC=>}D#faD8eb|7q$[eJWVL)1D?n6`#l?+c_];fT0B');
define('SECURE_AUTH_SALT', 'VHUW7#b7FcCu1Z|,$xId)&-Ty=QCsoAHpRYCzh%N2@:d:IJ9X#tm_ETl,Hd-^ip4');
define('LOGGED_IN_SALT', '.cjY-=v&!T#)IOQ}uj^v]Ce[U|.+%Kp*&l7+&q,G!%$~jqSa#f`tavDXk=mvFz)/');
define('NONCE_SALT', 'HdD/|U&lKTQ[xC5rG b4L87Gd}d1304TxH,:V<XSM36?L8#-nOGq$,QR.*=YA5.J');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define( 'WP_DEBUG', false );

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
define( 'WP_SITEURL', 'https://trabal.mx/' );
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

