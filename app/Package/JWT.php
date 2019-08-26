<?php

namespace App\Package;
use Illuminate\Http\Request;

class JWT
{
    protected $token;
    private static $instance = null;

    public static function instance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }


    public function auth(Request $request)
    {
        $header = $request->header('Authorization');
        dump($header);

    }

    public function generateKey($user)
    {

        $id = '123';
        $header = response()->json(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = response()->json(['user_id' => $id]);
        $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, 'abC123!', true);
        $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        $this->token = $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;

        return $this;

    }

    public function key()
    {
        $jwt = [
            'access_token' => $this->token,
            'expires_in' => 3600,
            'status' => true,
            'token_type' => 'bearer'
        ];
        return $jwt;
    }


}