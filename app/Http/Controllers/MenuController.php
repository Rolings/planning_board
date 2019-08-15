<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    protected $menu;
    protected $final_menu = [];
    protected $exclude_id = [];

    protected function createMenuTree($menu)
    {
        foreach ($this->menu as $index_menu => $step_menu) {
            if ($step_menu['parent_id'] === $menu['id']) {
                $this->final_menu[$menu['id']]['child'][] = $step_menu;
                $this->exclude_id[] = $step_menu['id'];
            }
        }
        krsort($this->menu);
        foreach ($this->menu as $index => $menu) {
            if (isset($this->final_menu[$menu['id']])) {
                $this->menu[$index]['child'] = $this->final_menu[$menu['id']]['child'];
            }

        }

        usort($this->menu, function ($a, $b) {
            return $b['order'] - $a['order'];
        });

        $this->exclude_id = array_values($this->exclude_id);

        foreach ($this->menu as $index => $menu) {
            foreach ($this->exclude_id as $id) {
                if ($menu['id'] === $id) {
                    unset($this->menu[$index]);
                }
            }
        }


    }

    public function index()
    {
        $this->menu = Menu::orderBy('id', 'desc')->get()->toArray();
        foreach ($this->menu as $index_menu => $menu) {
             $this->createMenuTree($menu);
        }
        return $this->menu;
    }
}
