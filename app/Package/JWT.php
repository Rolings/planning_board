<?php

namespace App\Package;

use Illuminate\Http\Request;
use App\Models\User;

class JWT
{
    public $token;
    private static $instance = null;
    public $secret_key = 'abC123!';

    public static function instance()
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getToken($request)
    {

        if (!empty($request->header('Authorization'))) {
            $headers = $request->header('Authorization');
            if (empty($headers))
                return response()->json(['error' => 'Token not found'], 401);

            if (strpos($headers, '.') === false)
                return response()->json(['error' => 'Token not validation'], 401);
            $this->token = trim(str_replace('bearer ', '', $headers));
        }


        return $this;
    }


    public function auth()
    {
        $token = explode('.', $this->token);
        $header = $token[0];
        $payload = $token[1];
        $new_signature = base64_encode(hash_hmac('sha256', $header . "." . $payload, $this->secret_key, true));
        $test_token = $header . "." . $payload . "." . $new_signature;
        $str = base64_decode($payload);

        if (!empty($str)) {
            preg_match('#\{(.*?)\}#', $str, $match);
            if (is_array($match) && isset($match[0]) && is_string($match[0])) {
                $user_data = json_decode($match[0]);
            }
        }

        if (empty($user_data))
            return response()->json(['error' => 'Token not validation'], 401);

        $user = User::find($user_data->user_id);
        if (empty($user))
            return response()->json(['error' => 'Not auth'], 401);

        return response()->json([
            'user' => $user,
        ],200);

    }

    public function generateKey($user)
    {

        $header = response()->json(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = response()->json(
            [
                'user_id' => $user->id,
                'name' => $user->name,
                'datetime' => date("Y-m-d H:i:s")
            ]);

        $header = base64_encode($header);
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
