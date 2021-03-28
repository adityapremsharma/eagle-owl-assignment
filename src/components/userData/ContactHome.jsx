import React from "react";
import firebase from "firebase";
import Search from "../extras/Search";

export default class ContactHome extends React.Component {
  state = { contactHomeData: [] };

  // const [search, setSearch] = useState("")

  //     const fetchBlogs = async() => {

  //         const response = db.collection('contactHome');
  //         const data = await response.get();
  //         data.docs.forEach(item => {
  //         console.log(item.data())
  //     })
  // }

  componentDidMount = async () => {
    const db = firebase.firestore();

    const collection = db.collection("contactHome");

    await collection.onSnapshot((results) => {
      let userData = [];
      results.forEach((result) => {
        userData.push(result.data());
        this.setState({ contactHomeData: userData });
      });
    });
  };

  // useEffect(() => {
  //     const db = firebase.firestore();
  //     const getContactHome = async() => {

  //     const collection = db.collection("contactHome")
  //     await collection.onSnapshot((results) => {
  //         results.forEach(result => setContactHomeData([...contactHomeData, result.data()]))
  //     });

  // const collection = db.collection("contactHome")
  // await collection.onSnapshot((results) => {
  //     const changes = results.docChanges()
  //     changes.forEach(change => {
  //     console.log(change.doc.data())
  // })
  // });

  // }
  //    getContactHome()

  // }, [contactHomeData])

  render() {
    const { contactHomeData } = this.state;
    return (
      <div className="contact-home">
        <h1 className="header-mb-primary">Contact Home</h1>
        <Search
          placeholder="Search User"
          debouncedText={this.getDebouncedText}
        />
        {contactHomeData.map((data) => {
          return (
            <div className="card-primary">
              <div className="text-container">
                <h1>{data.name}</h1>
                <h2>{data.email}</h2>
                <h2>{data.phoneNumber}</h2>
              </div>
              <div className="btn-container">
                <a href={`tel:${data.phoneNumber}`} className="btn-primary">
                  Call
                </a>
                <a href={`mailto:${data.email}`} className="btn-primary">
                  Mail
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
