class Api {
    constructor(config) {
        this._url = config.url;
        this.headers = config.headers;
    }
    
    _onError (res) {
        if(res.ok){
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo () {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._onError)
    }

    getInitialCards () {
        return fetch(`${this._url}cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._onError)
    }

    setUserInfo (inputs) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: inputs.name,
                about: inputs.about
            })
        })
        .then(this._onError)
    }

    postNewCard (cardData) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link,
            })
        })
        .then(this._onError)
    }

    deleteCard (cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._onError)
    }

    putLike (cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._onError)
    }

    deleteLike (cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._onError)
    }

    changeAvatar (input) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: input.avatar
            })
        })
        .then(this._onError)
    }

    updateAuthorizationToken () {
        this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    }
}

const api = new Api({
    // url: 'https://api.mesto.polinap.nomoredomains.icu/',
    url: 'http://localhost:3005/',
    headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    }
});

export {api};
