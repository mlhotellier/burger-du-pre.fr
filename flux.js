let state = {
};
const subscribers = [];

const dispatch = (newStateValue) => {
    state = newStateValue;
    for (const fct of subscribers) {
        fct(state)
    }
}

const subscribe = (subscriberFct) => {
    subscribers.push(subscriberFct);
}

subscribe((state) => {
    if (state.owner) {
        console.log('Le propriétaire est ajouté', state.owner)
         document.getElementById('header').textContent = `Le propriétaire du restaurant est ${state.owner.firstName}`
    }
})

dispatch({
    company: {
        name: 'Burger du Pré'
    }
})

document.getElementById('addForm').addEventListener("submit", (evt) => {
    evt.preventDefault()
    const firstNameInput = evt.currentTarget.firstName
    dispatch({
        company: {
            name: 'Burger du Pré'
        },
        owner: {
            firstName: firstNameInput.value,
        }
    })
})