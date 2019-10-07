<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\RolePermissions;

class Role extends Model
{
    protected $table = 'role';
    public $timestamps = false;

    public function setIdAttribute($value)
    {
        $this->attributes['value'] = $value;
    }

    public function setNameAttribute($value)
    {
        $this->attributes['text'] = $value;
    }

    public function role_permissions()
    {
        return $this->hasMany(RolePermissions::class,'role_id','id');
    }

    public static function getFullData()
    {
        $fullData = [];
        foreach (self::all() as $role) {
            $fullData[] = [
                'id'=>$role->id,
                'name'=>$role->name,
                'permissions'=>$role->role_permissions
            ];
        }
        return $fullData;
    }
}
