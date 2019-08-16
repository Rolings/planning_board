<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\URL;
use Laracasts\Utilities\JavaScript\JavaScriptFacade;


class TransmitDataToJavaScript
{

    public function handle($request, Closure $next)
    {
        JavaScriptFacade::put([
            'baseUrl' => '/',
            'base' => URL::to(''),
            'csrfToken' => csrf_token(),
        ]);

        return $next($request);
    }

}
