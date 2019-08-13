<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Database\Seeder;

class GenerateSeeds extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'schema:seed-generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate seed all table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
       $tables = DB::select('SHOW TABLES');
        if(!empty($tables)){
            foreach ($tables as $table){
                Artisan::call('make:seeder',['name'=>$table->Tables_in_planning_board]);
                $this->info('Create '.$table->Tables_in_planning_board.' seed was successful');
            }
        }
    }
}
