import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment,Menu,Grid,Image,Dropdown } from 'semantic-ui-react';
import authAction from '../../store/actions/authAction';

const menuTopItems = ["Users","Admin users","Lawyers","Counselors","Police","Doctors"];
const tableAttributes = ["","Name","Email","Phone number","Status","His/Her CP","Level",""]

const columns = tableAttributes.map((ta,i) => (
    <Grid.Column key={i} width={ ta === "Level"? 1 : ta == "Email" ? 3 : 2}>
      <span style={{fontWeight:"bold"}}>{ta}</span>
    </Grid.Column>
  ))


const users = [
    {
        id:1,
        name:"Thian Lian Ben",
        email:"misterlianben@gmail.com",
        status:"active",
        img_url:'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-5-2.jpg',
        contact_person:'+91938383848',
        level:1,
    },
    {
        id:2,
        name:"Thian Lian Ben",
        email:"misterlianben@gmail.com",
        status:"active",
        img_url:'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Whatsapp-DP-5-2.jpg',
        contact_person:'+91938383848',
        level:1,
    }
]

const options = [
    { key: 1, text: 'Active', value: "active" },
    { key: 2, text: 'Inactive', value: "inactive" },
  ]


class UserManagement extends Component {

    componentDidMount(){
        this.props.fetchAllUsers();
        console.log(this.props.all_users);
    }

    
    state = {
        activeItem:menuTopItems[0]
    }

    handleMenuItemClick(value){
        console.log(value)
        this.setState({
            activeItem:value,
        })
    }

    render() {
        return (
            <div style={{marginLeft:"10px",marginRight:"10px"}}>
                <Menu pointing secondary>
                    {
                        menuTopItems.map((m)=><Menu.Item
                        key={m}
                        name={m}
                        active={this.state.activeItem === m}
                        onClick={()=>this.handleMenuItemClick(m)}
                    />)
                    }    
                </Menu>

                <div>
                    <Grid>{columns}</Grid>

                    {
                        this.props.all_users.map((user,index)=><div key={index} className={ (index + 1) % 2 === 0 ? "user-list-items": "user-list-items-odd"}>
                        <Grid>
                            <Grid.Column width={2} style={{paddingLeft:'30px'}}>
                                <Image src={user.image} className="user-list-image"/>
                            </Grid.Column>
                            <Grid.Column width={2} style={{alignSelf:'center'}}>
                                <span>{user.displayName}</span>
                            </Grid.Column>
                            <Grid.Column  width={3} style={{alignSelf:'center'}}>
                                <span>{ user.email !== undefined || user.email !== "" ? user.email : "--"}</span>
                            </Grid.Column>
                            <Grid.Column width={2} style={{alignSelf:'center'}}>
                                <span>{ "--"}</span>
                            </Grid.Column>
                            <Grid.Column width={2} style={{alignSelf:'center'}}>
                                {/* <Menu compact > */}
                                    <Dropdown options={options} simple item value={user.status === "" || user.status === undefined ? "inactive" : user.status}/>
                                {/* </Menu> */}
                            </Grid.Column >
                            <Grid.Column width={2} style={{alignSelf:'center'}}>
                                <span>{user.contact_person}</span>
                            </Grid.Column>
                            
                            <Grid.Column style={{alignSelf:'center'}}>
                                <span>{user.level}</span>
                            </Grid.Column>
                        </Grid>
                    </div>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        all_users: state.authState.all_users,
    }
}

const mapDispatchProps = (dispatch) =>{
    return {
        fetchAllUsers :() => dispatch(authAction.fetchAllUsers())
    }
}

export default connect(mapStateProps,mapDispatchProps)(UserManagement);