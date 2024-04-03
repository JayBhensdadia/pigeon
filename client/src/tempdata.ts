export const userData = {
    id: "userid1",
    firstname: "Jay",
    lastname: "Bhensdadia",
    chats: [
        {
            id: "chat1",
            name: "Vijay Patel",
            members: [
                "userid1",
                "userid2"
            ],
            messages: [
                {
                    id: "msg1",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "hi there"
                },
                {
                    id: "msg2",
                    sender: "userid2",
                    chatId: "chat1",
                    content: "hello, how are you how have you been... long time huh...."
                },
                {
                    id: "msg3",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "wassup?"
                },
                {
                    id: "msg4",
                    sender: "userid2",
                    chatId: "chat1",
                    content: "nothing much... just coding..."
                }
            ]
        },

        {
            id: "chat2",
            name: "Tony Stark",
            members: [
                "userid1",
                "userid2"
            ],
            messages: [
                {
                    id: "msg1",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "hi there"
                },
                {
                    id: "msg2",
                    sender: "userid2",
                    chatId: "chat1",
                    content: "hello, how are you how have you been... long time huh...."
                },
                {
                    id: "msg3",
                    sender: "userid1",
                    chatId: "chat1",
                    content: "wassup?"
                },
                {
                    id: "msg4",
                    sender: "userid2",
                    chatId: "chat1",
                    content: "nothing much... just coding..."
                }
            ]
        },

    ]

}

export interface Message {
    id: string;
    sender: string;
    chatId: string;
    content: string;
}

export interface Chat {
    id: string;
    name: string;
    members: string[];
    messages: Message[];
}