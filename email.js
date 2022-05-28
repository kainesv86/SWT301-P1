const changeEmail = (currentUser, newEmail) => {
        return { ...currentUser, email: newEmail };
};

const UserJS = {
        changeEmail,
};

module.exports = UserJS;
