<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\Package\JWT;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtCustomMiddleware extends BaseMiddleware
{
    public function handle($request, Closure $next)
    {
        try {
            JWT::instance()->key();
        } catch (Exception $e) {

        }
        return $next($request);
    }

}