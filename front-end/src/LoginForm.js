export function LoginForm(params) {

    const handleChange = (event) => {
        let newCredentials = { ...params.credentials };
        newCredentials[event.target.name] = event.target.value;
        params.setCredentials(newCredentials);
    };

    return (
        <div className="login-box" style={{ maxWidth: "unset" }}>
            <div style={{border:"1px solid black", padding:"0px 10px 10px 10px"}}>
                <p>User: <span style={{ fontWeight: "bold" }} >{(params.currentUser) ? params.currentUser.user : "not logged in"}</span></p>
                <div className={(params.currentUser) ? "hidden" : "visible"}>
                    <div>
                        <label htmlFor="user">User: </label>
                        <input type="text" size={10} id="user" name="user" value={params.credentials.user} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="text" size={10} id="password" name="password" value={params.credentials.password} onChange={handleChange} />
                    </div>
                </div>
                <button onClick={params.login}>
                    {(params.currentUser) ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
}