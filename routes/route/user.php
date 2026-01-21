<?php

use App\Http\Controllers\Backend\V1\User\UserCatalogueController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('user-catalogues', UserCatalogueController::class);
});
