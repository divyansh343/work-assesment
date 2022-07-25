import { useState } from 'react';
import './App.css';

function App() {
  const [store, setStore] = useState([]);
  const [prevData, setPrevData] = useState({});

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")


  const clearValues = () => {
    setFirstName("");
    setLastName("");
    setCompany("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setAddress("");
    setCity("");
    setState("");

    setPrevData({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const keep = [firstName, lastName, company, email, password, cpassword, address, city, state]
    setStore(store => [...store, keep])

    clearValues()
  }

  const previewData = (e) => {
    e.preventDefault()

    setPrevData({
      firstName, lastName, company, email, address, city, state

    }
    )
  }

  return (
    <div className="App">
      <div >
        <p className="text-zinc-200 text-4xl bottom-4 border-black bg-purple-600">
          Contact us
        </p>
      </div>

      <div>
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

              <div>
                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>

              <div>
                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
              </div>
            </div>

            <div className="mb-6">
              <label for="compony" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
              <input
                value={company}
                onChange={e => setCompany(e.target.value)}
                type="company" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="amazon" required />
            </div>

            <div className="mb-6">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div>

            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div className="mb-6">
                <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                <input
                  value={cpassword}
                  onChange={e => setCPassword(e.target.value)}
                  type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
            </div>

            <div className="mb-6">
              <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
              <input
                value={address}
                onChange={e => setAddress(e.target.value)}
                type="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>

            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                <input
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
              </div>
              <div>
                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
                <input
                  value={state}
                  onChange={e => setState(e.target.value)}
                  type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
              </div>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            <button onClick={clearValues} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear</button>

            <button onClick={previewData} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">preview</button>


          </form>

        </div>
      </div>

      {
        Object.keys(prevData).length === 0
          ? <></>
          :
          <>

            <div class="max-w-2xl mx-auto mb-28">

              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">preview data</label>
              <div id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message...">

                <p>{prevData.firstName}</p>
                <p>{prevData.lastName}</p>
                <p>{prevData.company}</p>
                <p>{prevData.email}</p>
                <p>{prevData.address}</p>
                <p>{prevData.city}</p>
                <p>{prevData.state}</p>
              </div>

              <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
            </div>
          </>

      }

      {
        store.length < 1 ?
          <>
            Empty Records
          </>
          :
          <>
            <section className="container mx-auto pt-20 p-6 font-mono">
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">

                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">First Name</th>
                        <th className="px-4 py-3">Last Name</th>
                        <th className="px-4 py-3">Company</th>
                        <th className="px-4 py-3">email</th>
                        <th className="px-4 py-3">password</th>
                        <th className="px-4 py-3">Confirm password</th>
                        <th className="px-4 py-3">address</th>
                        <th className="px-4 py-3">city</th>
                        <th className="px-4 py-3">state</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {store.map((list) => (
                        <>
                          <tr className="text-gray-700">
                            {
                              list.map(record => (
                                <>
                                  <td className="px-4 py-3 text-sm  border">{record}</td>
                                </>
                              ))
                            }
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

          </>
      }

    </div>
  );
}

export default App;
