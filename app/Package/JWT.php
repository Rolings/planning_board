<?php

namespace App\Package;
use Illuminate\Http\Request;

class JWT
{
    protected $token;
    private static $instance = null;

    private $secret_key = 'abC123!';

    public static function instance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }


    public function auth(Request $request)
    {
        $headers = $request->header('Authorization');
        $token = explode('.', $this->token);
        $header = $token[0];
        $payload = $token[1];
        $new_signature = base64_encode(hash_hmac('sha256', $header . "." . $payload, $this->secret_key, true));
        $test_token = $header . "." . $payload . "." . $new_signature;

        return response()->json([
            'payload' =>base64_decode($payload),
            'head'=>$headers
        ]);

    }

    public function generateKey($user)
    {

        $header = response()->json(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = response()->json(['user_id' => $user->id,'name'=>$user->name]);

        $header =  base64_encode($header);
        $payload = base64_encode($payload);
        $signature = base64_encode(hash_hmac('sha256', $header . "." . $payload, $this->secret_key, true));
        $this->token = $header . "." . $payload . "." . $signature;

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
