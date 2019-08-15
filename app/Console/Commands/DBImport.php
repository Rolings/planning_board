<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DBImport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:import';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import DB from backup';

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
        $files = scandir(storage_path('backups/'), SCANDIR_SORT_DESCENDING);
        if(!empty($files)){
            $file = $files[0];

            $path = storage_path('backups/'.$file);
            DB::unprepared(file_get_contents($path));
            $this->info('The backup has been proceed successfully.');
        }else
            $this->info('File: '.$files.' is empty.');

    }
}
