<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

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
}
