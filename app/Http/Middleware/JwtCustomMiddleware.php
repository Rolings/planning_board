<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\Package\JWT;

class JwtCustomMiddleware
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