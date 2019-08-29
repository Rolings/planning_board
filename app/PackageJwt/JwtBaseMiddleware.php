<?php


namespace App\PackageJwt;

use Exception;
use Illuminate\Support\Facades\Cookie;

class JwtBaseMiddleware
{
    public $token = null;

    public function getToken($request)
    {
        if (!empty($request->header('Authorization')))
            $headers = $request->header('Authorization');
        else
            throw new Exception('Authorization not found!');

        if (empty($headers) || is_null($headers))
            throw new Exception('Token not found!');

        if (strpos($headers, '.') === false)
            throw new Exception('Not valid!');

        $this->token = trim(str_replace('bearer ', '', $headers));

        return $this;
    }

}
