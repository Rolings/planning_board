<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMenuTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('menu', function(Blueprint $table)
		{
			$table->integer('id')->primary();
			$table->string('title', 50)->default('');
			$table->integer('parent_id')->default(0);
			$table->string('icon', 50)->default('0');
			$table->string('description')->default('0');
			$table->string('href', 125)->default('');
			$table->string('url', 125)->default('');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('menu');
	}

}
