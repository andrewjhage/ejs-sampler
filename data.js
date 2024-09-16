
let meetings = [
    {
    id: 0,
    topic: "CIT Monthly Meeting",
    manditory: true,
    dateTime: "September 19th 2024, 2pm-3pm",
    location: "KNOY Hall West Lafayette",
    parking:
    "Park in the West Street Garage, 3rd floor, Venue opposite front entrance.",
    },
    {
    id: 1,
    topic: "Research in Higher level Ed",
    manditory: false,
    dateTime: "September 24th 2024, 1pm-5pm",
    location: "Beresford Building, Room 2, Hall West Lafayette",
    parking: "Park in surface lot 300. Venue beside lot.",
    },
    {
    id: 2,
    topic: "Curriculum Planning",
    manditory: true,
    dateTime: "October 19th 2024, 4pm-6pm",
    location: "IO240, Indianapolis",
    parking:
    "Park in North Stret Garage, Michigan St. Venue opposite side of street, 300km North.",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.note > button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const meetingId = parseInt(button.id);
            const content = meetings.find(m => m.id === meetingId);

            const modalTitle = document.querySelector('.modal-title');
            modalTitle.innerText = content.topic;

            const modalBody = document.querySelector('.modal-body');
            modalBody.innerText = content.location;

            const modalFooter = document.querySelector('.modal-footer');
            modalFooter.innerText = content.parking;
        });
    });
});

export default meetings;