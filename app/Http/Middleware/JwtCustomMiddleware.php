<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\Package\JWT;

class JwtCustomMiddleware
{
    public function handle($request, Closure $next)
    {
        if(!empty($request->header('Authorization'))){
            JWT::instance()->getToken($request);
        }
        return $next($request);
    }

}
