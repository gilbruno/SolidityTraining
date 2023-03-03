import React from 'react'

function HomeContent() {


  return (
    <div className="container-sm mt-5">
      <div className="w-50 mb-5">
      
      </div>
      


      <div class="card w-50">
        <img src="images/voting.jpeg" class="card-img-top" alt=""/>
        <div class="card-body mb-5">
          <h5 class="card-title">Card title</h5>
          <p class="card-text text-center">Somme Trainings DAPP</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Dashboard : See general infos about the mart contract ...</li>
        </ul>
        <div class="card-body">
          <a href="dashboard" class="card-link">Dashboard</a>
        </div>
        <div class="card-body">
          <a href="gasless" class="card-link">Gasless</a>
        </div>
      </div>

    </div>
  )
}

export default HomeContent