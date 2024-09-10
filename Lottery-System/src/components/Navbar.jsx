import React from 'react'
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  bg-yellow-500 w-full">
            <a class="navbar-brand" href="/"><strong>SattaLink</strong></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/admin">Admin <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            <header className=" mr-5">
                    <LanguageSwitcher />
                </header>
        </nav>
    )
}

export default Navbar
