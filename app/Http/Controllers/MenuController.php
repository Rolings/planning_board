<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    protected $menu;
    protected $child_menu = [];
    protected $exclude_id = [];

    public function __construct()
    {
        $this->middleware('jwt');
    }

    protected function sortBy($array, $key)
    {
        usort($array, function ($a, $b) use ($key) {
            return $b[$key] - $a[$key];
        });
        return $array;
    }

    protected function createMenuTree($menu)
    {
        foreach ($this->menu as $index_menu => $step_menu) {
            if ($step_menu['parent_id'] === $menu['id']) {
                $this->child_menu[$menu['id']]['child'][] = $step_menu;
                $this->exclude_id[] = $step_menu['id'];
            }
        }
        krsort($this->menu);

        foreach ($this->menu as $index => $menu) {
            if (isset($this->child_menu[$menu['id']])) {
                $this->child_menu[$menu['id']]['child'] = $this->sortBy($this->child_menu[$menu['id']]['child'], 'order');
                $this->menu[$index]['child'] = $this->child_menu[$menu['id']]['child'];
            }
        }

        $this->menu = $this->sortBy($this->menu, 'order');
        $this->exclude_id = array_values($this->exclude_id);

        foreach ($this->menu as $index => $menu) {
            foreach ($this->exclude_id as $id) {
                if ($menu['id'] === $id) {
                    unset($this->menu[$index]);
                }
            }
        }

        usort($this->menu, function($a, $b) {
            return $a['order'] - $b['order'];
        });

    }

    protected function getMenu()
    {
        $this->menu = Menu::orderBy('id', 'desc')->get()->toArray();
        foreach ($this->menu as $index_menu => $menu) {
            $this->createMenuTree($menu);
        }
    }

    public function index()
    {
        $this->getMenu();
        return $this->menu;
    }

    public function getFullMenu()
    {
        return Menu::orderBy('id', 'asc')->get()->toArray();
    }

    public function getMenuInformation(Request $request)
    {
        return Menu::where('id', '=', $request->post('id'))->first()->toArray();
    }
}
