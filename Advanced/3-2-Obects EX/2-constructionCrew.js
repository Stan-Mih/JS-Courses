function constructionCrew(bj) {

    if(bj.dizziness === false){
        return bj;
    }else{
        const water = bj.experience * bj.weight * 0.1;
        bj.levelOfHydrated += water;
        bj.dizziness = false;
        return bj;
    }
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )
constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  )
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  )