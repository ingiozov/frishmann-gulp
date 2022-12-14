'use-strict'
import * as flsFunctions from './modules/functions.js'
import { cursorCustom } from './modules/cursor.js'
import { headerImg } from './modules/header.js'
import { gsapAcc } from './modules/gsapAcc.js'
import { imageMove } from './modules/imgMove.js'
import { progressBar } from './modules/progressbar.js'
import { vacanciesAcc } from './modules/vacanciesAcc.js'

// webp check
flsFunctions.isWebp()

// main page
// custom cursor
cursorCustom()

headerImg()
progressBar()
vacanciesAcc()

// case page
// gsapAcc()
// imageMove()
