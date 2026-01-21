<?php

namespace App\Http\Controllers\Backend\V1\User;

use App\Http\Controllers\Backend\BaseController;
use Inertia\Inertia;
use Inertia\Response;

class UserCatalogueController extends BaseController
{
    public function __construct() {}

    public function index(): Response
    {
        return Inertia::render('users/user-catalogues/index');
    }

    public function create(): Response
    {
        return Inertia::render('users/user-catalogues/save');
    }
}
