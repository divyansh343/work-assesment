import { useState } from 'react';
import toast,{ Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/header';

function App() {
  const [store, setStore] = useState([]);
  const [prevData, setPrevData] = useState({});
  const [checkedRecords, setCheckedReocords] = useState([]);

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
    //function to clear all the input fields
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
    //it validates and add data into records
    e.preventDefault()
    if (password !== cpassword) {
      toast.error("your password and confirm password dont match")
    } else{

      const keep = [firstName, lastName, company, email, password, cpassword, address, city, state]
      setStore(store => [...store, keep])
      toast.success("added into records")
      
      clearValues()
    }
  }

  const selectRecords = (event) => {
    // use to manage selected records state
    if (event.target.checked) {
      if (!checkedRecords.includes(event.target.value)) {
        setCheckedReocords(checkedRecords => [...checkedRecords, event.target.value])
      }
    } else {
      setCheckedReocords(checkedRecords => (checkedRecords.filter(val => val !== event.target.value)))
    }
  }

  const handleExportToCsv = () => {
    // function to export records into csv
    if (store.length === 0) {
      toast("no records to export")
      return
    }
    var content = store;
    var finalVal = '';

    for (var i = 0; i < content.length; i++) {
      var value = content[i];

      for (var j = 0; j < value.length; j++) {
        var innerValue = value[j];
        var result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0)
          result = '"' + result + '"';
        if (j > 0)
          finalVal += ',';
        finalVal += result;
      }

      finalVal += '\n';
    }

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(finalVal));
    pom.setAttribute('download', 'data.csv');
    pom.click();
    toast.success("records exported into .csv file")
  }
  
  const handleSelectedExportToCsv = () => {
        // function to export selected records into csv
    if (checkedRecords.length === 0) {
      toast("select records to export")
      return
    }
    var er = [checkedRecords]
    var content = er;

    var finalVal = '';

    for (var i = 0; i < content.length; i++) {
      var value = content[i];
      for (var j = 0; j < value.length; j++) {
        var innerValue = value[j];
        var result = innerValue.replaceAll('"', '');
        if (result.search(/("|,|\n)/g) >= 0)
          // result = '"' + result + '"';
        if (j > 0)
        finalVal += ',';
        finalVal += result;
      }

      finalVal += '\n';
    }

    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(finalVal));
    pom.setAttribute('download', 'filterd_records.csv');
    pom.click();
    toast("selected records exported into .csv file")
  }

  const previewData = (e) => {
    // function to handle preview of input fields
    if (Object.keys(prevData).length === 0) {
      toast("nothing to preview")
    }
    e.preventDefault()
    setPrevData({
      firstName, lastName, company, email, address, city, state

    }
    )
  }

  const clearAllRecords = () => {
    // function to clear all records
    setStore([])
    setCheckedReocords([])
  }

  return (
    <div className="App">
      <Header header="Contact us" />
      <div><Toaster/></div>
      <div>
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">

              <div>
                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input
                  maxLength={25}
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>

              <div>
                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input
                  maxLength={25}
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
              </div>
            </div>

            <div className="mb-6">
              <label for="compony" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
              <input
              maxLength={50}
                value={company}
                onChange={e => setCompany(e.target.value)}
                type="company" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="amazon" required />
            </div>

            <div className="mb-6">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <input
              maxLength={50}
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            </div>

            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                <input
                  value={password}
                  minLength={6}
                  maxLength={15}
                  onChange={e => setPassword(e.target.value)}
                  type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
              <div className="mb-6">
                <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
                <input
                  minLength={6}
                  maxLength={15}
                  value={cpassword}
                  onChange={e => setCPassword(e.target.value)}
                  type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
              </div>
            </div>

            <div className="mb-6">
              <label for="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
              <input
                maxLength={75}
                value={address}
                onChange={e => setAddress(e.target.value)}
                type="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
            </div>

            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label for="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                <input
                maxLength={50}
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
              </div>
              <div>
                <label for="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</label>
                <input
                minLength={25}
                  value={state}
                  onChange={e => setState(e.target.value)}
                  type="text" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State" required />
              </div>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            <button onClick={clearValues} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Clear</button>

            <button onClick={previewData} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">preview</button>

          
            <button onClick={handleExportToCsv} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Export to csv
            </button>
            
              
            <button onClick={handleSelectedExportToCsv} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">selected Export to csv
            </button> 
              
            <button onClick={clearAllRecords} className="my-2 mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">clear records
            </button>
            

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
            <div>
              <h2 className='mb-20 text-grey-500 text-3xl'>
                Empty Records.
              </h2>
            </div>
          </>
          :
          <>
            <section className="container mx-auto pt-20 p-6 font-mono">
              <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">

                    <thead>
                      <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Select</th>
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
                              list.length > 1 &&
                              <div className='py-6'>
                                {/* <input type="checkbox" class="custom-control-input" value={list} id={list} /> */}
                                <input type="checkbox" class="custom-control-input" id={list} value={list} onClick={selectRecords} />
                                {/* <input onClick={selectRecords(list)} type="checkbox" name="type" /> */}
                              </div>
                            }
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