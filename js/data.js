var meta = {
	tabs: ["Home","Projects","Composition","Performance","CV"]
}

var home = {
	image: "images/profile_image.jpg",
	name: "Zhengshan (Kitty) Shi",
	intro: "I am an accordionist, pianist, bagpipes player, music technologist, and a current graduate student at <a href='https://ccrma.stanford.edu/' target='_blank'>Stanford's Center for Computer Research in Music and Acoustics (CCRMA) </a>. My research interests cover computational models of auditory perception and stream segregation, and I'm hoping to create more exciting things in this fantastic field.",
	contact: "kittyshi@ccrma.stanford.edu"
};

var projects = {
	pieces: [
		{
			image: "/images/CS229-thumb.png",
			title: "A Computational Model for Multi-Instrument Music Transcription",
			labels: ["PLCA","Instrument Classification"],
			links:[
				{
					target: "files/CS229-paper.pdf",
					name: "Paper",
					icon: "fa-file"
				},
				{
					target: "files/CS229-poster.pdf",
					name: "Poster",
					icon: "fa-file"
				}
			],
			texts:[
				"The aim of our project is to build a model for multi-instrument music transcription. Automatic music transcription is the process of converting an audio wave file into some form of music notes representations. We propose a two-step process for an automatic multi- instrument music transcription system including timbre classification and source separation using probabilistic latent component analysis."
			]
		},
		{
			image: "/images/Music256a-thumb.png",
			title: "Chordrina - an interactive app for chord learning",
			labels: ["Music","Computing","Design"],
			links:[
				{
					target: "https://ccrma.stanford.edu/~kittyshi/256a/chordrina.html",
					name: "Project website",
					icon: "fa-globe"
				},
				{
					target: "https://vimeo.com/82437699",
					name: "Demo",
					icon: "fa-video-camera"
				}
			],
			texts:[
				"Chordrina is an educational-involving game for music lovers who are interested in learning harmony and chord progressions. We provide real-time feedback of chord that's being played by the user and incorporate the chord progression as a music accompaniment in the game mode."
			]
		},
		{
			image: "/images/Scofo-thumb.png",
			title: "An Automatic Music Score Alignment System for Music Recordings Appreciation",
			labels: ["MIR","Score Following"],
			links:[
				{
					target: "/files/Scofo-Thesis.pdf",
					name: "Thesis",
					icon: "fa-file"
				},
				{
					target: "http://vimeo.com/82431858",
					name: "Demo",
					icon: "fa-video-camera"
				}
			],
			texts:[
				"Score Alignment is automatically tracking the audio performance of a piece of music and aligning to its corresponding score representation.It associates musical events in a score with time segments of an audio signal."
			]
		},
		{
			image: "/images/Music251-thumb.png",
			title: "Chordrina - an interactive app for chord learning",
			labels: ["Auditory Stream Segregation"],
			links:[
				{
					target: "files/Music251-paper.pdf",
					name: "Paper",
					icon: "fa-file"
				}
			],
			texts:[
				"The human auditory system has the ability to segregate one auditory stream from another. How what we know affects what we actually perceive remains an interesting question. In this article, the author aims to explore the relationship between schema-based processing using previous knowledge of a melody and the perceptual organization of the sound."
			]
		},
		{
			image: "/images/Room-thumb.png",
			title: "Mult-touch Room Expansion Controller (Group Project)",
			labels: ["Room Acoustics","3D Audio"],
			links:[
				{
					target: "files/Room-poster.pdf",
					name: "Poster",
					icon: "fa-file"
				},
				{
					target: "http://www.aes.org/e-lib/browse.cfm?elib=16102",
					name: "Paper",
					icon: "fa-file"
				}
			],
			texts:[
				"This paper describes an application that provides real-time high accuracy room acoustics simulation. Using a multi-touch interface, the user can easily manipulate the dimensions of a virtual space while hearing the room's acoustics change in real-time. Such an interface enables a more fluid and intuitive control of our application, which better lends itself to expressive artistic gestures for use in such activities as sound design, performance, and education. "
			]
		}
	]
};


var composition = {
	pieces: [
		{
			sound_cloud:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125819394&amp;color=e68443&amp;auto_play=false&amp;show_artwork=true"></iframe>'
		},
		{
			sound_cloud:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125819519&amp;color=e68443&amp;auto_play=false&amp;show_artwork=true"></iframe>'
		},
		{
			sound_cloud:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125819588&amp;color=e68443&amp;auto_play=false&amp;show_artwork=true"></iframe>'
		}
	]
};

var performance = {
	pieces: [
		{
			vimeo_video:'<iframe src="//player.vimeo.com/video/82433056?portrait=0" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/82433056">Bagpipes</a> from <a href="http://vimeo.com/kittyshi">Zhengshan Shi</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'
		}
	]
};


