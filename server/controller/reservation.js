import Reservation from "../models/reservationschema.js" ;

export const sendReservation = async(req ,res , next) =>{
    const {firstName , lastName, email , phone, date, time } = req.body ;

    if(!firstName || !lastName || !email || !phone || !date || !time) {
        return res.status(400).json({
            message: "Fill all requirements correctly"
        });
    }
    
        try {
            await Reservation.create({ firstName, lastName, email, phone, date, time });
            res.status(200).json({
                success : true ,
                message : " Reservation sent SUccesfully !",
            })
        } catch (error) {
            console.error(error.message) ;
            res.status(500).json({
                success: false,
                message: 'Failed to create entry'
            });
        }
    
}