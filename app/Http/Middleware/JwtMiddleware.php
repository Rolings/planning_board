<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\PackageJwt\JwtBaseMiddleware;

class JwtMiddleware extends JwtBaseMiddleware
{
    public function handle($request, Closure $next)
    {
        try {
            if ($request->isMethod('post')){
                $this->getToken($request);
            }

        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
        return $next($request);
    }

}
