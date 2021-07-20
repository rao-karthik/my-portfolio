"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactForm_model_1 = __importDefault(require("../models/contactForm.model"));
const protect_1 = __importDefault(require("../middlewares/protect"));
const authorise_1 = __importDefault(require("../middlewares/authorise"));
const constants_1 = require("../utils/constants");
const router = express_1.default();
router.get('/', protect_1.default, authorise_1.default([constants_1.admin]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield contactForm_model_1.default.find().lean().exec();
        res.status(200).json({
            status: 'success',
            messages
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
}));
router.get('/:id', protect_1.default, authorise_1.default([constants_1.admin]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const message = yield contactForm_model_1.default.findById(id).lean().exec();
        res.status(200).json({
            status: 'success',
            message
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const message = yield contactForm_model_1.default.create(data);
        res.status(201).json({
            status: 'success',
            message
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
}));
router.delete('/:id', protect_1.default, authorise_1.default([constants_1.admin]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield contactForm_model_1.default.findByIdAndDelete(id).lean().exec();
        res.status(200).json({
            status: 'success',
            message: 'message successfully deleted'
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
}));
exports.default = router;
