<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\Package\JWT;

class JwtCustomMiddleware
{
    public function handle($request, Closure $next)
    {
        JWT::instance()->getToken()->auth();
        return $next($request);
    }

}
