import type {FC} from 'react';
import type {ViewStyle} from 'react-native';
import collectingFontIconSelection from './selection.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import styled from '@emotion/native';

export const doobooIconList = [
  'Add',
  'AddAlt',
  'AddAPhoto',
  'AddAPhotoAlt',
  'AddCircle',
  'AddCircleAlt',
  'AddLocation',
  'AddLocationAlt',
  'AddPhotoAlternate',
  'AddPhotoAlternateAlt',
  'AddReaction',
  'AddReactionAlt',
  'AlternateEmail',
  'AlternateEmailAlt',
  'Android',
  'AndroidAlt',
  'Api',
  'ApiAlt',
  'Apple',
  'AppleAlt',
  'ArrowCircleDown',
  'ArrowCircleDownAlt',
  'ArrowCircleLeft',
  'ArrowCircleLeftAlt',
  'ArrowCircleRight',
  'ArrowCircleRightAlt',
  'ArrowCircleUp',
  'ArrowCircleUpAlt',
  'ArrowDown',
  'ArrowDownAlt',
  'ArrowLeft',
  'ArrowLeftAlt',
  'ArrowRight',
  'ArrowRightAlt',
  'ArrowUp',
  'ArrowUpAlt',
  'Assistant',
  'AssistantAlt',
  'Attachment',
  'AttachmentAlt',
  'AutoAwesome',
  'AutoAwesomeAlt',
  'BranchMerged',
  'BranchMergedAlt',
  'Block',
  'BlockAlt',
  'Bookmark',
  'BookmarkAlt',
  'Branch',
  'BranchAlt',
  'BrightnessDown',
  'BrightnessDownAlt',
  'BrightnessUp',
  'BrightnessUpAlt',
  'BugReport',
  'BugReportAlt',
  'Business',
  'BusinessAlt',
  'Calendar',
  'CalendarAlt',
  'CalendarRange',
  'CalendarRangeAlt',
  'Camera',
  'CameraAlt',
  'CancelCircle',
  'CancelCircleAlt',
  'Check',
  'CheckAlt',
  'CheckBoxChecked',
  'CheckBoxCheckedAlt',
  'CheckBoxUnchecked',
  'CheckBoxUncheckedAlt',
  'CheckCircle',
  'CheckCircleAlt',
  'ChevronDown',
  'ChevronDownAlt',
  'ChevronLeft',
  'ChevronLeftAlt',
  'ChevronRight',
  'ChevronRightAlt',
  'ChevronUp',
  'ChevronUpAlt',
  'Circle',
  'CircleAlt',
  'Close',
  'CloseAlt',
  'Code',
  'CodeAlt',
  'Comment',
  'CommentAlt',
  'Commit',
  'CommitAlt',
  'ContentCopy',
  'ContentCopyAlt',
  'DarkMode',
  'DarkModeAlt',
  'DarkModeHalf',
  'DarkModeHalfAlt',
  'Delete',
  'DeleteAlt',
  'Directions',
  'DirectionsAlt',
  'Distance',
  'DistanceAlt',
  'Dooboo',
  'DoobooAlt',
  'DoobooHalf',
  'DoobooHalfAlt',
  'DoobooIo',
  'DoobooIoAlt',
  'DoobooIoHalf',
  'DoobooIoHalfAlt',
  'Dooboolab',
  'DooboolabAlt',
  'DooboolabHalf',
  'DooboolabHalfAlt',
  'DoobooUi',
  'DoobooUiAlt',
  'Download',
  'DownloadAlt',
  'Eco',
  'EcoAlt',
  'EcoFriendly',
  'EcoFriendlyAlt',
  'Edit',
  'EditAlt',
  'Emergency',
  'EmergencyAlt',
  'EmergencyHalf',
  'EmergencyHalfAlt',
  'EmojiPeople',
  'EmojiPeopleAlt',
  'Error',
  'ErrorAlt',
  'Explore',
  'ExploreAlt',
  'Facebook',
  'FacebookAlt',
  'FastForward',
  'FastForwardAlt',
  'FastRewind',
  'FastRewindAlt',
  'Favorite',
  'FavoriteAlt',
  'FavoriteHalf',
  'FavoriteHalfAlt',
  'Folder',
  'FolderAlt',
  'Folk',
  'FolkAlt',
  'Github',
  'GithubAlt',
  'Google',
  'GoogleAlt',
  'GridView',
  'GridViewAlt',
  'GTranslate',
  'GTranslateAlt',
  'Help',
  'HelpAlt',
  'History',
  'HistoryAlt',
  'Home',
  'HomeAlt',
  'Image',
  'ImageAlt',
  'Info',
  'InfoAlt',
  'Instagram',
  'InstagramAlt',
  'InstagramReels',
  'InstagramReelsAlt',
  'Ios',
  'IosAlt',
  'IosShare',
  'IosShareAlt',
  'Issue',
  'IssueAlt',
  'IssueClosed',
  'IssueClosedAlt',
  'IssueSkipped',
  'IssueSkippedAlt',
  'Label',
  'LabelAlt',
  'Language',
  'LanguageAlt',
  'Library',
  'LibraryAlt',
  'LibraryAdd',
  'LibraryAddAlt',
  'LightMode',
  'LightModeAlt',
  'LightModeHalf',
  'LightModeHalfAlt',
  'Link',
  'LinkAlt',
  'List',
  'ListAlt',
  'Location',
  'LocationAlt',
  'Lock',
  'LockAlt',
  'LockOpen',
  'LockOpenAlt',
  'Mail',
  'MailAlt',
  'Mention',
  'MentionAlt',
  'Menu',
  'MenuAlt',
  'Mic',
  'MicAlt',
  'Microsoft',
  'MicrosoftAlt',
  'Mobile',
  'MobileAlt',
  'Monetization',
  'MonetizationAlt',
  'MonetizationHalf',
  'MonetizationHalfAlt',
  'More',
  'MoreAlt',
  'MoreVertical',
  'MoreVerticalAlt',
  'Navigation',
  'NavigationAlt',
  'NearMe',
  'NearMeAlt',
  'Neurology',
  'NeurologyAlt',
  'Notification',
  'NotificationAlt',
  'Openai',
  'OpenaiAlt',
  'OpenInNew',
  'OpenInNewAlt',
  'Page',
  'PageAlt',
  'PageAlert',
  'PageAlertAlt',
  'Password',
  'PasswordAlt',
  'Pause',
  'PauseAlt',
  'People',
  'PeopleAlt',
  'Person',
  'PersonAlt',
  'PersonAdd',
  'PersonAddAlt',
  'PersonRemove',
  'PersonRemoveAlt',
  'Phone',
  'PhoneAlt',
  'Play',
  'PlayAlt',
  'Playlist',
  'PlaylistAlt',
  'PullRequest',
  'PullRequestAlt',
  'PushPin',
  'PushPinAlt',
  'Puzz',
  'PuzzAlt',
  'PuzzHalf',
  'PuzzHalfAlt',
  'RadioButtonChecked',
  'RadioButtonCheckedAlt',
  'RadioButtonUnchecked',
  'RadioButtonUncheckedAlt',
  'Refresh',
  'RefreshAlt',
  'Remove',
  'RemoveAlt',
  'RemoveCircle',
  'RemoveCircleAlt',
  'Repository',
  'RepositoryAlt',
  'Resizer',
  'ResizerAlt',
  'Reviews',
  'ReviewsAlt',
  'Save',
  'SaveAlt',
  'Schedule',
  'ScheduleAlt',
  'Search',
  'SearchAlt',
  'SelfImprovement',
  'SelfImprovementAlt',
  'Send',
  'SendAlt',
  'Setting',
  'SettingAlt',
  'Share',
  'ShareAlt',
  'Shield',
  'ShieldAlt',
  'Sms',
  'SmsAlt',
  'SmsFailed',
  'SmsFailedAlt',
  'Speaker',
  'SpeakerAlt',
  'SportsScore',
  'SportsScoreAlt',
  'Sprint',
  'SprintAlt',
  'Square',
  'SquareAlt',
  'Star',
  'StarAlt',
  'StarHalf',
  'StarHalfAlt',
  'Stop',
  'StopAlt',
  'SubdirectoryArrowRight',
  'SubdirectoryArrowRightAlt',
  'Sync',
  'SyncAlt',
  'Terminal',
  'TerminalAlt',
  'ThumbDown',
  'ThumbDownAlt',
  'ThumbUp',
  'ThumbUpAlt',
  'Tiktok',
  'TiktokAlt',
  'Triangle',
  'TriangleAlt',
  'Tune',
  'TuneAlt',
  'UnfoldLess',
  'UnfoldLessAlt',
  'UnfoldMore',
  'UnfoldMoreAlt',
  'Upload',
  'UploadAlt',
  'Verified',
  'VerifiedAlt',
  'VerifiedUser',
  'VerifiedUserAlt',
  'Vimeo',
  'VimeoAlt',
  'Visibility',
  'VisibilityAlt',
  'VolumeDown',
  'VolumeDownAlt',
  'VolumeMute',
  'VolumeMuteAlt',
  'VolumeUp',
  'VolumeUpAlt',
  'Warning',
  'WarningAlt',
  'Wifi',
  'WifiAlt',
  'WifiOff',
  'WifiOffAlt',
  'Youtube',
  'YoutubeAlt',
] as const;

export type IconNames = typeof doobooIconList;
export type IconName = IconNames[number];

type Props = {
  name: IconName;
  size?: number;
  color?: string;
  style?: ViewStyle;
};

const Ico: FC<Props> = createIconSetFromIcoMoon(
  collectingFontIconSelection,
  'doobooui',
  require('./doobooui.ttf'),
);

export const Icon = styled(Ico)`
  color: ${({theme, color}) => color || theme.text.basic};
`;
