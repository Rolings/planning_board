<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RolePermissions;
use App\Models\Role;

class Permissions extends Controller
{
    public function getRole()
    {
        return Role::getFullData();
    }


}
