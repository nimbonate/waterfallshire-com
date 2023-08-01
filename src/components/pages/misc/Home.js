import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAnchor } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';

import { BTYPES, SIZES } from '../../../utils/constants.js';
import { Button } from '../../../utils/styles/forms';
import { HillSeparators, Iframe, IframeContainer, Path, Squiggle, Svg } from '../../../utils/styles/images.js';
import { BgColor, BgMedia, BgMediaBody, BgMediaContainer, BgMediaHeading, BgMediaModal, Column, Grid, Hr, Wrapper, Row, Centered, FullWidthLine, Container } from '../../../utils/styles/misc';
import { Body, H2, H3, LLink } from '../../../utils/styles/text';
import { Tooltip } from '../../misc/Misc.js';
import { Tabs } from '../../misc/Tabs.js';

function Home(props){
    const theme = useTheme();
    const sendAlert = (alertType) => {
        toast[alertType]('🦄 Wow so easy to send an alert!');
    }

    return (
        <>
            <Helmet>
                <title>Home {props.site.name ? `| ${props.site.name}` : ""}</title>
            </Helmet>
            <BgMediaContainer>
                <BgColor
                    bgColor={theme.colors.primary}
                    bodyLength={500}
                >
                    <BgMedia
                        alt="hero background" 
                        // Honestly the below snippet somehow works so the little "image not found" icon with the alt tag doesn't pop up in the upper left of the banner bgColor, so don't remove the below til we find a better solution lol
                        src={
                            "https://firebasestorage.googleapis.com/v0/b/test-fire-react-base.appspot.com/o/public%2Fbanners%2FDSC_0047.JPG?alt=media&token=8d4ff53c-11c2-4849-9479-6cd091598635"
                            ?? 
                            require("../../../assets/images/misc/blank-bg.png")
                        }
                        bodyLength={500}
                    />
                </BgColor>
                <BgMediaModal>
                    <BgMediaHeading>Hero Section</BgMediaHeading>
                    <BgMediaBody>
                        This is the homepage hero section, customize it as you please, please. Dolore irure deserunt occaecat tempor. 
                        Dolore reprehenderit ut consequat anim officia amet. Laboris officia ea eu elit consectetur sit dolor duis adipisicing reprehenderit reprehenderit deserunt reprehenderit quis. 
                        Fugiat est reprehenderit quis labore aute anim in labore officia non ut aliquip mollit. In laboris amet amet occaecat. Laboris minim culpa cillum veniam adipisicing et deserunt sit.
                    </BgMediaBody>
                    <LLink to={"/about"}>
                        <Button 
                            type="button"
                            size={SIZES.LG} 
                            color={"black"}
                        >
                            Call to Action
                        </Button>
                    </LLink>
                   
                </BgMediaModal>
            </BgMediaContainer>
            <Wrapper>
                <H2>Buttons</H2>
                <Button>Default button</Button>
                <Button size={SIZES.LG} onClick={() => sendAlert("info")} type="button">Primary Large Normal Button</Button>
                <Button color={theme.colors.secondary} size={SIZES.MD} btype={BTYPES.INVERTED} onClick={() => sendAlert("warn")} type="button">Secondary Medium Inverted Button</Button>
                <Button color={theme.colors.red} size={SIZES.SM} btype={BTYPES.TEXTED} onClick={() => sendAlert("error")} type="button">Red Small Texted Button</Button>
                <Button color={theme.colors.green} size={SIZES.MD} rounded={true} onClick={() => sendAlert("success")} type="button">Green Rounded Button</Button>
                <Button color={theme.colors.yellow} size={SIZES.MD} btype={BTYPES.INVERTED} type="button">Yellow Rounded Inverted Button</Button>
                <Button color={theme.colors.lightGrey} size={SIZES.SM} btype={BTYPES.TEXTED} type="button">Red Small Texted Button</Button>
                <Hr />
                <Tooltip text="Add more information to an element here!">
                    <Button>Tooltip button <BiInfoCircle /></Button>
                </Tooltip>
                <LLink to="/#anchored">
                    <Button>Anchor linked button <FaAnchor /></Button>
                </LLink>
            </Wrapper>
            <Centered>
                <Svg 
                    viewBox="0 0 1366 221"
                    maxWidth="50%"
                >
                    <Path fill={theme.colors.primary} d={Squiggle}/>
                </Svg>
            </Centered>
        
            <Wrapper>
                <H2>Tabs</H2>
                <Tabs>
                    <div label="Tab 1">
                        <H3>Content 1 here</H3>
                        <Body>
                            The tab content will be contained below each tab header. Excepteur nisi nulla sint amet incididunt exercitation commodo laboris id pariatur tempor labore minim. 
                            Proident sunt proident quis dolore ex voluptate reprehenderit aute. Veniam duis occaecat veniam incididunt ea mollit nisi sint et Lorem qui veniam. 
                        </Body>
                    </div>
                    <div label="Tab 2">
                        <H3>Content 2 here</H3>
                        <Body>
                            The tab content will be contained below each tab header. Excepteur nisi nulla sint amet incididunt exercitation commodo laboris id pariatur tempor labore minim. 
                            Proident sunt proident quis dolore ex voluptate reprehenderit aute. Veniam duis occaecat veniam incididunt ea mollit nisi sint et Lorem qui veniam. Dolor irure esse excepteur voluptate eiusmod labore.
                        </Body>
                    </div>
                    <div label="Tab 3">
                        <H3>Content 3 here</H3>
                        <Body>
                            The tab content will be contained below each tab header. Excepteur nisi nulla sint amet incididunt exercitation commodo laboris id pariatur tempor labore minim. 
                            Proident sunt proident quis dolore ex voluptate reprehenderit aute. Veniam duis occaecat veniam incididunt ea mollit nisi sint et Lorem qui veniam. 
                            Id cupidatat aute adipisicing aliqua consectetur deserunt et ipsum. Et nisi eiusmod magna anim ad nostrud sunt.
                        </Body>
                    </div>
                    <div label="Tab 4">
                        <H3>Content 4 here</H3>
                        <Body>
                            The tab content will be contained below each tab header. Excepteur nisi nulla sint amet incididunt exercitation commodo laboris id pariatur tempor labore minim. 
                            Proident sunt proident quis dolore ex voluptate reprehenderit aute. Veniam duis occaecat veniam incididunt ea mollit nisi sint et Lorem qui veniam.
                            Dolor officia nulla et aliquip. Sint dolore sint eiusmod veniam aliquip incididunt minim duis sint non cupidatat cillum aliquip. Consectetur deserunt sunt voluptate consequat.
                            Sint commodo nisi Lorem sunt amet sit mollit.
                        </Body>
                    </div>
                </Tabs>
            <Hr/>
                <H2>Grid System</H2>
                <Grid fluid>
                    <Row>
                        <Column sm={12} textalign="center" background={theme.colors.primary}>
                            <H3>Column 1</H3>
                            <Body>More information below</Body>
                        </Column>
                    </Row>
                    
                    <Row>
                        <Column sm={12} md={6} textalign="center" background={theme.colors.primary}>
                            <H3>Column 2</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={6} textalign="center" background={theme.colors.primary}>
                            <H3>Column 3</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                    </Row>

                    <Row>
                        <Column sm={12} md={4} textalign="center" background={theme.colors.primary}>
                            <H3>Column 4</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={4} textalign="center" background={theme.colors.primary}>
                            <H3>Column 5</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={4} textalign="center" background={theme.colors.primary}>
                            <H3>Column 6</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                    </Row>

                    <Row>
                        <Column sm={12} md={6} lg={3} textalign="center" background={theme.colors.primary}>
                            <H3>Column 7</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={3} textalign="center" background={theme.colors.primary}>
                            <H3>Column 8</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={3} textalign="center" background={theme.colors.primary}>
                            <H3>Column 9</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={3} textalign="center" background={theme.colors.primary}>
                            <H3>Column 9</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                    </Row>

                    <Row>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 10</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 11</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 12</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 13</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 14</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} textalign="center" background={theme.colors.primary}>
                            <H3>Column 15</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                    </Row>
                    
                    <Row>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary} padding="10px">
                            <H3>Column 16</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 17</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 18</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 19</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 20</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 21</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 22</H3>
                            <Body>More information below, but in this cell we are going to have longer text.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 23</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 24</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 25</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 26</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                        <Column sm={12} md={6} lg={4} xl={2} xxl={1} textalign="center" background={theme.colors.primary}>
                            <H3>Column 27</H3>
                            <Body>More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here. 
                            More information below, but in this cell we are going to have longer text to see what it is like if a cell has extra content relative to it's neighboring cells in the grid system that we are creating here.</Body>
                        </Column>
                    </Row>
                </Grid>
            </Wrapper>
            <Svg 
                viewBox="0 0 1000 149" 
                margin="0 0 -20px 0"
            >
                <Path 
                    fill={theme.colors.primary}
                    d={HillSeparators.one}
                />
                <Path 
                    fill={theme.colors.primary}
                    d={HillSeparators.two}
                />
            </Svg>
            <FullWidthLine height="auto">
                <Wrapper>
                        <H2 id="anchored">Anchored Section!</H2>
                        <Body>
                            When you click the anchor link button above, it should jump down here! Long body of text to follow Sunt aliqua veniam nisi non quis cupidatat Lorem dolor. 
                            Sit in ad ex deserunt non laboris. Exercitation eu amet nulla laborum ea magna aliquip tempor nulla ipsum duis culpa dolore eu. Nostrud qui enim officia consequat dolore reprehenderit est laboris esse. 
                            Excepteur irure sint culpa exercitation magna irure ad aute qui. Sunt amet eu cupidatat enim sunt elit sunt laborum nisi aute. 
                            Exercitation laborum id dolore et nulla excepteur ullamco ea consectetur excepteur magna amet.
                            Laborum pariatur cillum ad ex aliqua eiusmod ullamco ex qui tempor labore ipsum sint consequat. Tempor sint sunt enim aliquip eiusmod cillum fugiat anim. Dolore in aliqua laboris sit irure nulla. 
                            Et tempor veniam anim proident aliquip exercitation veniam amet laborum consectetur proident. Anim qui aute culpa nisi nulla do esse duis aute. Eu dolore elit cupidatat nulla cupidatat amet qui. 
                            Esse consequat ea est est officia anim reprehenderit occaecat amet qui.
                        </Body>
                        <Body>
                            Proident incididunt labore ea eiusmod sint anim exercitation. Ipsum magna consectetur proident enim nisi esse in ea labore culpa est cillum laboris reprehenderit. Dolore elit cupidatat occaecat magna >
                            Nisi commodo dolore aliquip occaecat anim culpa. Est sint qui fugiat eiusmod laboris incididunt mollit pariatur. Esse commodo duis sit fugiat esse laborum. Incididunt esse minim consequat aliquip aute exercitation in.
                            Dolore nulla veniam veniam proident deserunt voluptate est ex ex eiusmod incididunt ad voluptate adipisicing. Sint non ea nisi consectetur cupidatat. Ad elit minim reprehenderit ea nostrud elit amet est 
                            dolor adipisicing. Non irure excepteur fugiat nisi aliqua anim nostrud eiusmod et aliqua cillum reprehenderit quis pariatur. Do officia nulla ea ex consectetur est occaecat ad.
                        </Body>
                        <Body>
                            Ipsum nulla tempor proident commodo magna anim sint minim ea culpa eiusmod nisi do enim. Enim nostrud sit exercitation duis culpa. Ullamco ex ullamco est reprehenderit deserunt qui et amet ex minim dolore irure esse consequat. 
                            Culpa ad anim eu commodo irure irure esse enim Lorem ipsum non sunt pariatur cupidatat. Culpa tempor id sit officia duis ipsum mollit cupidatat cupidatat.
                        </Body>
                        <Container size={SIZES.MD}>
                            <IframeContainer>
                                <Iframe
                                    src="https://www.youtube.com/embed/YE7VzlLtp-4"
                                    id="test-video"
                                    title="Test Video"
                                />
                            </IframeContainer>
                        </Container>
                        <Body>
                            Ipsum nulla tempor proident commodo magna anim sint minim ea culpa eiusmod nisi do enim. Enim nostrud sit exercitation duis culpa. Ullamco ex ullamco est reprehenderit deserunt qui et amet ex minim dolore irure esse consequat. 
                            Culpa ad anim eu commodo irure irure esse enim Lorem ipsum non sunt pariatur cupidatat. Culpa tempor id sit officia duis ipsum mollit cupidatat cupidatat.
                        </Body>
                        <Body>
                            Proident incididunt labore ea eiusmod sint anim exercitation. Ipsum magna consectetur proident enim nisi esse in ea labore culpa est cillum laboris reprehenderit. Dolore elit cupidatat occaecat magna >
                            Nisi commodo dolore aliquip occaecat anim culpa. Est sint qui fugiat eiusmod laboris incididunt mollit pariatur. Esse commodo duis sit fugiat esse laborum. Incididunt esse minim consequat aliquip aute exercitation in.
                            Dolore nulla veniam veniam proident deserunt voluptate est ex ex eiusmod incididunt ad voluptate adipisicing. Sint non ea nisi consectetur cupidatat. Ad elit minim reprehenderit ea nostrud elit amet est 
                            dolor adipisicing. Non irure excepteur fugiat nisi aliqua anim nostrud eiusmod et aliqua cillum reprehenderit quis pariatur. Do officia nulla ea ex consectetur est occaecat ad.
                        </Body>
                        <Body>
                            Proident incididunt labore ea eiusmod sint anim exercitation. Ipsum magna consectetur proident enim nisi esse in ea labore culpa est cillum laboris reprehenderit. Dolore elit cupidatat occaecat magna >
                            Nisi commodo dolore aliquip occaecat anim culpa. Est sint qui fugiat eiusmod laboris incididunt mollit pariatur. Esse commodo duis sit fugiat esse laborum. Incididunt esse minim consequat aliquip aute exercitation in.
                            Dolore nulla veniam veniam proident deserunt voluptate est ex ex eiusmod incididunt ad voluptate adipisicing. Sint non ea nisi consectetur cupidatat. Ad elit minim reprehenderit ea nostrud elit amet est 
                            dolor adipisicing. Non irure excepteur fugiat nisi aliqua anim nostrud eiusmod et aliqua cillum reprehenderit quis pariatur. Do officia nulla ea ex consectetur est occaecat ad.
                        </Body>
                        <Body>
                            Ullamco sint dolore commodo irure anim tempor ad commodo magna sunt veniam labore velit tempor. Dolor ut reprehenderit fugiat aute Lorem. Dolore eiusmod laborum anim non minim labore qui occaecat nulla excepteur duis.
                            Ad eiusmod officia nisi nisi cupidatat non cupidatat in proident elit cupidatat ex proident ullamco. Ipsum commodo dolore tempor cupidatat amet eu quis minim eu consectetur occaecat occaecat nulla commodo. 
                            Laboris consequat sint commodo id esse ex minim esse amet reprehenderit ex excepteur. Sit culpa irure cillum culpa nostrud enim qui ex irure ea pariatur est eiusmod.
                            Occaecat non officia nostrud enim tempor. Eiusmod nisi occaecat elit dolore eiusmod reprehenderit tempor. Labore excepteur enim tempor excepteur nisi minim ex quis consequat cupidatat. Laboris incididunt velit 
                            consequat elit incididunt nisi adipisicing aliqua proident quis reprehenderit pariatur aliquip. Dolore excepteur nisi ipsum occaecat culpa laboris ad.
                        </Body>
                        <Body>
                            Eiusmod in deserunt dolore esse reprehenderit aliquip non aliquip dolore deserunt adipisicing deserunt magna. Do consequat duis Lorem ad pariatur. Magna elit mollit aliqua ut aliquip dolor ex proident velit deserunt. 
                            Sit adipisicing tempor nostrud amet. Reprehenderit sunt adipisicing dolor enim amet do eiusmod consequat reprehenderit culpa irure. Aute minim pariatur ipsum tempor sint magna. Dolor dolore laborum culpa do laboris veniam 
                            aliquip.
                        </Body>
                        <Body>
                            Ipsum nulla tempor proident commodo magna anim sint minim ea culpa eiusmod nisi do enim. Enim nostrud sit exercitation duis culpa. Ullamco ex ullamco est reprehenderit deserunt qui et amet ex minim dolore irure esse consequat. 
                            Culpa ad anim eu commodo irure irure esse enim Lorem ipsum non sunt pariatur cupidatat. Culpa tempor id sit officia duis ipsum mollit cupidatat cupidatat.
                        </Body>
                    </Wrapper>
            </FullWidthLine>
            <Svg 
                viewBox="0 0 1000 149" 
                margin="-20px 0 0 0"
                flipHoriz
            >
                <Path 
                    fill={theme.colors.primary}
                    d={HillSeparators.one}
                />
                <Path 
                    fill={theme.colors.primary}
                    d={HillSeparators.two}
                />
            </Svg>
        </>
    );
}

export default Home;