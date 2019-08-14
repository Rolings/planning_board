<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DbImport extends Command
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
        $newest_file = $files[0];
        $this->info($newest_file);
    }
}
