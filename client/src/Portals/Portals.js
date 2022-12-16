module.exports = () => {
    return {
        customer : {
            home: "/",
            about : "/about",
            services: "/services",
            ride: "/ride",
            helpandsupport: "/helpandsupport",
            account: "/account",
            end: true
        },
        admin:{
            home:"/admin",
            driverList:"/admin/driverlist",
            adminList:"/admin/adminlist",
            end: true
        },
        driver:{
            home:"/driver",
            end: true
        }
    }
}