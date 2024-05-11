import { Collection, Card, Image,Divider , View , Button , Heading, ScrollView } from "@aws-amplify/ui-react";
import image1 from '../mock_data/download.jpg'
import image2 from '../mock_data/image.png'
const items = [
    {
        title: 'Jan 2024',
        image: image2
    },
    {
        title: 'Feb 2023',
        image: image1
      },
    {
        title: 'June 2023',
        image: image2
      },
    {
        title: 'Dec 2023',
        image: image1
      },
      {
        title: 'Dec 2023',
        image: image1
      },
      {
        title: 'Dec 2023',
        image: image1
      },
    {
      title: 'March 2024',
      image: image1
    },
    {
        title: 'Feb 2024',
        image: image2
    },
    {
        title: 'Jan 2024',
        image: image1
    },
    {
        title: 'Jan 2024',
        image: image2
    },
  ];

export default function CollectionCards(){
    return (
        <ScrollView horizontal>

        <Collection
          items={items}
          type="list"
          direction="row"
          gap="20px"
          wrap="nowrap"
          marginLeft={10}
        >
          {(item, index) => (
            <Card
              key={index}
              borderRadius="medium"
              maxWidth="20rem"
              variation="outlined"
            >
              <Image
                src={item.image}
                alt="Volunteer work"
                borderRadius={20}
              />
              <View padding="xs">
                <Divider padding="xs" />
                <Heading padding="medium">{item.title}</Heading>
                <Button variation="primary" isFullWidth>
                  View
                </Button>
              </View>
            </Card>
          )}
        </Collection>
        </ScrollView>
    )
}
  