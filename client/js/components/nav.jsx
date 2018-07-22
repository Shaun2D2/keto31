import React from 'react';

const Nav = () => (
				<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
					<a class="navbar-brand app-brand" href="#">Keto31</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarColor01">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
							</li>
						</ul>
					</div>
				</nav>
);

export default Nav;
